(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,a=void 0,a=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(i,"string"),"symbol"===t(a)?a:String(a)),o)}var i,a}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var r,n,o;return r=t,o=[{key:"getAllCategories",value:function(){return(JSON.parse(localStorage.getItem("category"))||[]).sort((function(t,e){return new Date(t.createdAt)>new Date(e.createdAt)?-1:1}))}},{key:"saveCategory",value:function(e){var r=t.getAllCategories(),n=r.find((function(t){return t.id===e.id}));n?n.title=e.title:(e.id=(new Date).getTime(),e.createdAt=(new Date).toISOString(),r.push(e)),localStorage.setItem("category",JSON.stringify(r))}},{key:"getAllProducts",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"newest",e=JSON.parse(localStorage.getItem("products"))||[];return e.sort((function(e,r){return"newest"===t?new Date(e.createdAt)>new Date(r.createdAt)?-1:1:"oldest"===t?new Date(e.createdAt)>new Date(r.createdAt)?1:-1:void 0}))}},{key:"saveProducts",value:function(e){var r=t.getAllProducts(),n=r.find((function(t){return t.id===e.id}));n?(n.title=e.title,n.category=e.selectedCategory,n.quantity=e.quantity,n.unit=e.checkedUnit,n.seller=e.seller):(e.id=(new Date).getTime(),e.createdAt=(new Date).toISOString(),r.push(e)),localStorage.setItem("products",JSON.stringify(r))}},{key:"deleteProduct",value:function(e){var r=t.getAllProducts().filter((function(t){return t.id!==parseInt(e)}));localStorage.setItem("products",JSON.stringify(r))}}],(n=null)&&e(r.prototype,n),o&&e(r,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,a=void 0,a=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===n(a)?a:String(a)),o)}var i,a}var i=document.querySelector("#category-name"),a=document.querySelector("#add-new-category"),c=document.querySelector("#toggle-add-category"),u=document.querySelector("#add-category-section");const l=new(function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a.addEventListener("click",(function(t){return e.addNewCategory(t)})),c.addEventListener("click",(function(t){return e.toggleAddCategory(t)})),this.categories=[]}var e,n,l;return e=t,(n=[{key:"addNewCategory",value:function(t){t.preventDefault();var e=i.value;e&&(r.saveCategory({title:e}),this.categories=r.getAllCategories(),this.createCategoriesList(),i.value="",u.classList.add("hidden"),c.classList.remove("hidden"))}},{key:"setApp",value:function(){this.categories=r.getAllCategories()}},{key:"createCategoriesList",value:function(){var t="";r.getAllCategories().length<1&&(t="<option>اضافه کنید</option>"),this.categories.forEach((function(e){t+='<option value="'.concat(e.id,'">').concat(e.title,"</option>")})),document.querySelector("#product-category").innerHTML=t}},{key:"toggleAddCategory",value:function(t){u.classList.remove("opacity-0"),u.classList.remove("h-0"),c.classList.add("hidden")}}])&&o(e.prototype,n),l&&o(e,l),Object.defineProperty(e,"prototype",{writable:!1}),t}());function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function d(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===s(i)?i:String(i)),n)}var o,i}var p=document.querySelector("#add-new-product"),v=document.querySelector("#search-input"),m=document.querySelector("#sort-products"),g=document.querySelector("#product-name"),b=document.querySelector("#product-quantity"),h=document.querySelector("#radio-of-unit-packet"),S=document.querySelector("#radio-of-unit-kilugram"),w=document.querySelector("#product-category"),P=document.querySelector("#product-seller");const A=new(function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p.addEventListener("click",(function(t){return e.addNewProduct(t)})),v.addEventListener("input",(function(t){return e.searchProducts(t)})),m.addEventListener("change",(function(t){return e.sortProducts(t)})),this.products=[]}var e,n,o;return e=t,(n=[{key:"setApp",value:function(){this.products=r.getAllProducts()}},{key:"addNewProduct",value:function(t){t.preventDefault();var e=g.value,n=b.value,o=h,i=S,a="";o.checked?a=o.parentElement.innerText:i.checked&&(a=i.parentElement.innerText);var c=w.value,u=P.value;e&&n&&c&&(r.saveProducts({title:e,quantity:n,checkedUnit:a,selectedCategory:c,seller:u}),this.products=r.getAllProducts(),console.log(this.products),this.createProductsList(this.products),g.value="",b.value="",P.value="")}},{key:"createProductsList",value:function(t){var e=this,n="";t.forEach((function(t){var e=r.getAllCategories().find((function(e){return e.id==t.selectedCategory}));n+='\n      <tr class="flex items-center p-3 sm:p-6 flex-1 even:bg-primary-o20 product-list">\n      <td class="opacity-0">\n        <img src="./assets/images/trash.svg" alt="trash" data-id="'.concat(t.id,'">\n      </td>\n      <td class="table-body">\n        <p class="truncate">').concat(t.title,'</p>\n      </td>\n      <td class="table-body">\n        <p class="truncate">').concat(e.title,'</p>\n      </td>\n      <td class="table-body">\n        <p class="truncate">').concat(t.quantity,' <span class="text-sm sm:text-xl">').concat(t.checkedUnit,'</span></p>\n      </td>\n      <td class="table-body">\n        <p class="truncate">').concat(new Date(t.createdAt).toLocaleDateString("fa-IR"),'</p>\n      </td>\n      <td class="cursor-pointer delete-product">\n        <img src="./assets/images/trash.svg" alt="trash" data-id="').concat(t.id,'" class="w-4 sm:w-6">\n      </td>\n    </tr>\n      ')})),this.products.length<1&&(n='<div class="text-base sm:text-2xl my-3 sm:my-6">درحال حاضر محصولی وجود ندارد</div>'),document.querySelector("#products-list").innerHTML=n,d(document.querySelectorAll(".delete-product")).forEach((function(t){t.addEventListener("click",(function(t){return e.deleteProducts(t)}))}))}},{key:"searchProducts",value:function(t){var e=t.target.value.trim(),r=this.products.filter((function(t){return t.title.includes(e)}));this.createProductsList(r)}},{key:"sortProducts",value:function(t){var e=t.target.value;this.products=r.getAllProducts(e),this.createProductsList(this.products)}},{key:"deleteProducts",value:function(t){var e=t.target.dataset.id;r.deleteProduct(e),this.products=r.getAllProducts(),this.createProductsList(this.products)}}])&&f(e.prototype,n),o&&f(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}());document.addEventListener("DOMContentLoaded",(function(){l.setApp(),A.setApp(),l.createCategoriesList(),A.createProductsList(A.products)})),window.addEventListener("resize",(function(){var t=.01*window.innerHeight;document.querySelector("#container").style.setProperty("--vh","".concat(t,"px"))})),window.onload=function(){document.querySelector("#loading").style.display="none",document.querySelector("#container").style.display="flex"}})();