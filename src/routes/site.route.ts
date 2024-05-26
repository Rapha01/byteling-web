import { Router } from 'express';
import SiteController from '../controllers/site.controller';
import { Routes } from '../interfaces/routes.interface';

class SiteRoute implements Routes {
  public router = Router();
  public localizedRouter = Router();
  public siteController = new SiteController();

  public subpaths = [
    { path: '', middlewares: [], controller: this.siteController.index },
    { path: 'register', middlewares: [], controller: this.siteController.register },
    { path: 'registersuccess', middlewares: [], controller: this.siteController.registerSuccess },
    { path: 'login', middlewares: [], controller: this.siteController.login },
    { path: 'resetpassword', middlewares: [], controller: this.siteController.resetPassword },
    { path: 'settings', middlewares: [], controller: this.siteController.settings },
  ];

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    for (let subpath of this.subpaths) { 
      this.router.get(`/${subpath.path}`, subpath.middlewares, subpath.controller);
      this.localizedRouter.get(`/:locale/${subpath.path}`, subpath.middlewares, subpath.controller);
    }
  }
}

export default SiteRoute;
