import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $('.site-header');
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;


/* We use method 'bind' in order to set set 'this'. In our case without using this method, in "toggleTheMenu() {this.menuContent.toggleClass("site-header__menu-content--is-visible")}" 'this' is menuIcon object, because it's not called directly. That is why we use 'bind'. */


// Another version
// class MobileMenu {
//     constructor() {
//         $(".site-header__menu-icon").click(function () {
//             console.log("Hoorey, the icon was clicked!");
//         });
//     }
// }