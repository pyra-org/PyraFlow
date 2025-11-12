export class Router{
    constructor({ routes, render }) {
        this.routes = routes;
        this.render = render;
        document.addEventListener('popstate', () => resolve());
        this.resolve('/');
    }
    
    navigate(path) {
        history.pushState({}, '', path);
        this.resolve();
    }
    
    resolve() {
        const path = location.pathname;
        const route = this.routes.find(r => r.path === path);
     if (route && typeof window !== 'undefined') {
          this.render(route.component)
        } else {
            this.render('404 - Page Not Found');
        }
    }
}
