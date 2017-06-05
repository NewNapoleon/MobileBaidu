;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-baidu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M184.256 539.584C295.68 515.648 280.448 382.592 277.12 353.472 271.68 308.672 218.944 230.336 147.328 236.48c-90.112 8.064-103.296 138.24-103.296 138.24C31.872 434.88 73.216 563.456 184.256 539.584zM302.528 771.008c-3.264 9.344-10.56 33.28-4.224 54.144 12.416 46.656 53.056 48.768 53.056 48.768L409.6 873.92l0-142.528L347.136 731.392C319.04 739.776 305.472 761.536 302.528 771.008zM390.912 316.416c61.504 0 111.168-70.72 111.168-158.272C502.144 70.72 452.416 0 390.912 0 329.536 0 279.68 70.72 279.68 158.144 279.68 245.632 329.536 316.416 390.912 316.416zM655.744 326.848c82.176 10.688 134.976-77.056 145.472-143.488 10.752-66.368-42.24-143.552-100.416-156.8-58.368-13.376-131.136 80-137.728 140.928C555.136 241.984 573.76 316.352 655.744 326.848zM857.152 717.632c0 0-127.168-98.304-201.344-204.672C555.136 356.16 412.16 419.968 364.352 499.712 316.736 579.456 242.56 629.824 232 643.2c-10.688 13.184-153.6 90.304-121.856 231.168s143.168 138.112 143.168 138.112 82.112 8.192 177.344-13.184c95.296-21.12 177.344 5.312 177.344 5.312s222.592 74.56 283.52-68.992C952.384 792.064 857.152 717.632 857.152 717.632zM476.224 931.264 331.584 931.264c-62.528-12.48-87.36-55.168-90.56-62.4-3.072-7.36-20.864-41.664-11.392-99.968 26.944-87.424 104-93.696 104-93.696l77.056 0L410.688 580.48l65.536 1.088L476.224 931.264zM745.792 930.24 579.264 930.24c-64.512-16.64-67.52-62.592-67.52-62.592l0-184.128 67.52-1.088 0 165.568c4.096 17.536 26.048 20.8 26.048 20.8l68.544 0 0-185.344 71.936 0L745.792 930.24zM981.568 438.528c0-31.808-26.432-127.552-124.416-127.552-98.112 0-111.232 90.368-111.232 154.304 0 60.992 5.12 146.176 127.04 143.424C994.88 605.952 981.568 470.528 981.568 438.528z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M985.993896 490.240417l-453.43721 0L532.556687 36.804231c0-11.352559-9.216919-20.570501-20.569478-20.570501-11.356652 0-20.568455 9.216919-20.568455 20.570501l0 453.436186L37.980521 490.240417c-11.350512 0-20.568455 9.211802-20.568455 20.569478 0 11.350512 9.216919 20.568455 20.568455 20.568455l453.438233 0 0 453.439256c0 11.348466 9.211802 20.566408 20.568455 20.566408 11.352559 0 20.569478-9.217942 20.569478-20.566408L532.556687 531.378349l453.43721 0c11.351536 0 20.569478-9.217942 20.569478-20.568455C1006.563374 499.452219 997.345432 490.240417 985.993896 490.240417L985.993896 490.240417zM985.993896 490.240417"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M945.5 960.165c-10.833 0-17.667-10.2-17.667-21 0-37.283-36.695-111.366-87.333-182.165C789.94 686.304 728.914 620.461 690 602.75c-4.999-2.916-3.804-0.635-5.823-6.505 0.251-5.749 3.457-7.99 8.323-12.415 57.323-52.092 88-127.273 88-205.997 0-150.785-123.834-282.667-268.692-282.667C366.952 95.167 243.5 227.715 243.5 378.5c0 78.74 33.031 154.592 90.333 206.667 4.867 4.425 8.352 7.51 7.333 14-1.019 6.487-5.342 9.27-11.333 12-38.903 17.718-100.111 78.634-150.667 149.33-50.633 70.804-80.667 140.727-80.667 178 0 10.801-3.693 19.812-14.526 19.812-10.834 0-19.617-8.755-19.617-19.555 0-24.717 9.059-56.43 26.926-94.254 15.724-33.287 37.755-70.068 63.71-106.361 25.693-35.929 53.73-69.303 81.075-96.512 20.627-20.522 39.973-36.728 57.796-48.432-23.181-24.969-42.018-53.469-56.164-85.019-18.468-41.19-27.832-85.253-27.832-130.962 0-83.342 31.307-161.734 88.154-220.736 57.058-59.221 132.981-91.835 213.786-91.835 80.793 0 156.713 32.613 213.772 91.833 56.854 59.006 88.165 137.399 88.165 220.737 0 80.647-30.342 157.947-84.045 215.962 17.836 11.702 37.193 27.91 57.83 48.44 27.351 27.206 55.389 60.577 81.084 96.507 25.959 36.296 47.989 73.077 63.715 106.366 17.868 37.828 26.928 69.545 26.928 94.264C959.259 949.554 956.336 960.165 945.5 960.165z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M945.8762 891.621017 729.450009 670.515247c-3.577478-3.654226-7.689123-6.420223-12.068873-8.324596 46.496987-62.384839 74.101695-140.27072 74.101695-224.755903 0-205.091028-162.680103-371.302561-363.369891-371.302561-200.685695 0-363.359658 166.211533-363.359658 371.302561 0 205.088982 162.673963 371.303584 363.364775 371.303584 92.105744 0 176.203094-35.015491 240.249783-92.727914 1.769296 3.542686 4.101411 6.868431 7.001461 9.836019l216.376049 221.09963c14.918781 15.252379 39.161928 15.252379 54.129828 0C960.794981 931.699828 960.794981 906.869303 945.8762 891.621017L945.8762 891.621017zM428.118056 750.138702c-168.987762 0-306.020742-140.011824-306.020742-312.702931 0-172.745343 137.03298-312.703955 306.020742-312.703955 168.992879 0 306.015625 139.958612 306.015625 312.703955C734.133681 610.126878 597.110935 750.138702 428.118056 750.138702L428.118056 750.138702zM428.118056 750.138702"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)