import { JWT_SECRET } from "../config/config";
import { User } from "../model/User";
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");

let jwtOptions = <any>Object;
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET;

let strategy = new JwtStrategy(jwtOptions, async function (
  jwt_payload: any,
  done: any
) {
  let user = await User.findById(jwt_payload.user._id);
  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
});

export default strategy;
