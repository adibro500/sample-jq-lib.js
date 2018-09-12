// (function(window, document, undefined) {
//   var bird = function(target) {
//     return new bird.fn.init(target);
//   }
//   bird.fn = bird.prototype = {
//     init: function(target) {
//       this.target = target;
//       return this;
//     }
//   }
//   bird.fn.init.prototype.html = function(html) {
//     document.addEventListener('DOMContentLoaded', () => {
//       document.querySelectorAll(this.target).forEach((obj) => {
//         obj.innerHTML = html
//       })
//     });
//   }
//   bird.fn.init.prototype.colorify = function(color) {
//     document.addEventListener('DOMContentLoaded', () => {
//       document.querySelectorAll(this.target).forEach((obj) => {
//         obj.style.color = color
//       })
//     });
//   }
//   return window.bird = bird;
// })(this, document);

(function(window, document, undefined) {
  var bird = function(target) {
    // `DOMContentLoaded` already fired

    return new bird.fn.init(target);
  }
  bird.fn = bird.prototype = {
    init: function(target) {
      this.target = target;
      return this;
    }
  }
  bird.fn.init.prototype.html = function(html) {
    // document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll(this.target).forEach((obj) => {
        obj.innerHTML = html
      // })
    });
  }
  bird.fn.init.prototype.colorify = function(color) {
    // document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll(this.target).forEach((obj) => {
        obj.style.color = color
      // })
    });
  }
  return window.bird = bird;
})(this, document);
