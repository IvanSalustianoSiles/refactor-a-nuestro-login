import passport from "passport";
import local from "passport-local";
import { UserMDBManager } from "../dao/index.js";
import { isValidPassword } from "../utils.js";

const localStrategy = local.Strategy;

const initAuthStrategies = () => {
    

    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    })
}

export default initAuthStrategies;