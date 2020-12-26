import passport from 'passport';
import local from './localStrategy';

export default () => {
  passport.use('local', local);
};
