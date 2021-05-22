$('.all-category').on('click', function () {
  $(this).toggleClass('active')
  $(".all-category-menu-wrapper").toggle("blind")
});


$('.all-category-mobile').on('click', function () {
  $(this).toggleClass('active')
  $(".mobile-menu").toggle("blind")
});


$('.filters-btn').on('click', function () {
  $(this).toggleClass('active')
  $(".catalog-filter-mobile").toggle("blind")
});

$('.catalog-filter-mobile__close-btn').on('click', function () {
  $(".filters-btn").click()
});


$('.mobile-menu__close').on('click', function () {
  $(".all-category-mobile").click()
});




// $('#tables').on('click', function () {
//   $('.all-category-menu__item button').removeClass('active');
//   $(this).toggleClass('active')
// });


// $('#chairs').on('click', function () {
//   $('.all-category-menu__item button').removeClass('active');
//   $(this).toggleClass('active')
// });





const cards = document.querySelectorAll('.card');


if (document.documentElement.clientWidth < 992) {
  [...cards].map((card) => card.classList.add('card--liders'));
}

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth < 992) {
    [...cards].map((card) => {
      !card.classList.contains('card--liders') && card.classList.add('card--liders');
    });
  } else {
    [...cards].map((card) => {
      card.classList.contains('card--liders') && card.classList.remove('card--liders');
    });
  }

});

// -----------------  Слайдеры --------------------

$(document).ready(function () {

  $('.categories-list').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    vertical: false,
    touchThreshold: 100,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 9.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('.product__slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product__slider-nav',
    vertical: false,
  });
  $('.product__slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product__slider-main',
    focusOnSelect: true,
    arrows: false,
    vertical: true,
    adaptiveHeight: true,
    accessibility: true,
  });
  $('.product-info__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    accessibility: true,
  });
  $('.analog-offer__products-card-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<div class="products-card-slider-left"><img src="img/main/slider-arrow-left.svg" alt="Слайд"></div>',
    nextArrow: '<div class="products-card-slider-right"><img src="img/main/slider-arrow-right.svg" alt="Слайд"></div>',
    accessibility: true,
    touchThreshold: 100,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 2.4,
        slidesToScroll: 1
      }
    },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.special-offers__products-card-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<div class="products-card-slider-left"><img src="img/main/slider-arrow-left.svg" alt="Слайд"></div>',
    nextArrow: '<div class="products-card-slider-right"><img src="img/main/slider-arrow-right.svg" alt="Слайд"></div>',
    accessibility: true,
    touchThreshold: 100,
    responsive: [{
      breakpoint: 1600,
      settings: {
        arrows: false,
        slidesToShow: 3.4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 2.4,
        slidesToScroll: 1
      }
    },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.popular-product__products-card-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<div class="products-card-slider-left"><img src="img/main/slider-arrow-left.svg" alt="Слайд"></div>',
    nextArrow: '<div class="products-card-slider-right"><img src="img/main/slider-arrow-right.svg" alt="Слайд"></div>',
    accessibility: true,
    touchThreshold: 100,
    responsive: [{
      breakpoint: 1300,
      settings: {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 900,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        slidesToShow: 2.4,
        slidesToScroll: 1
      }
    },
    ]

  });
  $('.instagram-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    accessibility: true,
    touchThreshold: 100,
    responsive: [{
      breakpoint: 1250,
      settings: {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3.1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 3.1,
        slidesToScroll: 1
      }
    },
    ]


  });
  $('.subcategory-menu__list').slick({
    slidesToShow: 3.05,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<div class="subcategory-menu__list-slider-left"><img src="img/main/category-arrow.svg" alt="Слайд"></div>',
    nextArrow: '<div class="subcategory-menu__list-slider-right"><img src="img/main/category-arrow.svg" alt="Слайд"></div>',
    accessibility: true,
    touchThreshold: 100,
    infinite: false,
    responsive: [{
      breakpoint: 1032,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
        slidesToScroll: 1
      }
    },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });





});

$('.blog__list').masonry({
  // options
  itemSelector: '.blog__item',
  horizontalOrder: true,
  gutter: '.blog__sizer',
  horizontalOrder: true,
  columnWidth: '.blog__item',
  percentPosition: true
});

// -----------------  Табы  --------------------
$(".nav-wrapp__item").hover(function (e) {
  e.preventDefault();
  $(".news-body-tab").removeClass("news-body-tab--active");
  $(".nav-wrapp__item").removeClass("tab_active");

  $($(this).attr("href")).addClass("news-body-tab--active");
  $(this).addClass("tab_active");
});

// -----------------  Селект  --------------------

// переменная не переназначается, поэтому используем const
// используем querySelectorAll, чтобы собрать массив со всеми сущностями .select
const select = document.querySelectorAll(".select");

// если массив не пустой, пробегаемся в цикле по каждой найденой сущности
if (select.length) {
  select.forEach((item) => {
    // достаем из текущей сущности .select__current
    const selectCurrent = item.querySelector(".select__current");

    item.addEventListener("click", (event) => {
      const el = event.target.dataset.choice;
      const text = event.target.innerText;

      // Проверяем является ли это choosen и не выбрано ли его значение уже
      if (el === "choosen" && selectCurrent.innerText !== text) {
        selectCurrent.innerText = text;
      }

      item.classList.toggle("is-active");
    });
  });
}


// -----------------  Гамбургер  --------------------
$(".hamburger").click(function (event) {
  $(".hamburger").toggleClass("hamburger__active"),
    $(".mobile__menu ").toggleClass("mobile__menu__active");
});

// ----------------- Аккордион --------------------
/**
 * Классы для аккордиона
 */
const accordeon = {
  CLASS: 'accordion',
  CLASS_ACTIVE: 'accordion__active',
}

/**
 * acc - неизменная переменная для работы с аккордионом
 */
const acc = document.querySelectorAll(`.${accordeon.CLASS}`);
let openedAccordeon = null;

/**
 * использует nextElementSibling для открытия или закрытия аккордиона
 */
function closeAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = 0;
  acc.classList.remove(accordeon.CLASS_ACTIVE);
}


function openAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = `${acc.nextElementSibling.scrollHeight}px`;
  acc.classList.add(accordeon.CLASS_ACTIVE);
}

/**
 * Проверка на открытие аккордиона !nextElementSibling!
 */
function isAccordeonOpen(acc) {
  acc.nextElementSibling && !acc.nextElementSibling.style.maxHeight
}

/**
 * Итерация, реализация переключения открытого аккордиона
 *
 */
for (const accordeon of acc) {
  accordeon.addEventListener("click", function () {
    const currentAccordeon = this;

    openedAccordeon && closeAccordeon(openedAccordeon);

    if (isAccordeonOpen(currentAccordeon)) {
      closeAccordeon(currentAccordeon);
    } else {
      openAccordeon(currentAccordeon);
      openedAccordeon = currentAccordeon;
    }
  });
};

// --------------

const accordionList = document.getElementsByClassName("accordion--multiple");
const classNameActive = "accordion--active";

for (const accordion of accordionList) {

  accordion.addEventListener("click", function () {

    this.classList.toggle(classNameActive);

    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



$('body').on('click', '.password-control', function () {
  if ($('#password-input').attr('type') == 'password') {
    $(this).addClass('view');
    $('#password-input').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('#password-input').attr('type', 'password');
  }
  return false;
});

$('body').on('click', '.password-control2', function () {
  if ($('#password-input2').attr('type') == 'password') {
    $(this).addClass('view');
    $('#password-input2').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('#password-input2').attr('type', 'password');
  }
  return false;
});


! function () {
  var i, u, p, y, m, g, e = document.querySelectorAll(".yt-lazyload");
  0 < e.length && (u = document.createElement("div"), p = document.createElement("div"), y = document.createElement("div"), m = document.createElement("a"), g = document.createElement("iframe"), u.classList.add("yt-lazyload-wrap"), p.classList.add("yt-lazyload-content"), y.classList.add("yt-lazyload-playbtn"), m.classList.add("yt-lazyload-logo"), m.target = "_blank", m.rel = "noreferrer", g.setAttribute("allow", "accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"), g.setAttribute("allowfullscreen", ""), i = new IntersectionObserver(function (e) {
    e.forEach(function (e) {
      var t, a, o, n, r, l = e.target,
        d = e.target.dataset.id,
        c = e.target.dataset.thumb,
        s = e.target.dataset.logo;
      !0 === e.isIntersecting && (t = u.cloneNode(), l.append(t), a = p.cloneNode(), t.append(a), a.style.setProperty("--yt-lazyload-img", 'url("https://img.youtube.com/vi/' + d + c + '/maxresdefault.jpg")'), o = y.cloneNode(), a.append(o), "0" !== s && ((n = m.cloneNode()).href = "https://youtu.be/" + d, a.append(n)), o.addEventListener("click", function () {
        (r = g.cloneNode()).src = "https://www.youtube.com/embed/" + d + "?autoplay=1", a.append(r)
      }), i.unobserve(l))
    })
  }, {
    rootMargin: "200px 0px"
  }), e.forEach(function (e) {
    i.observe(e)
  }))
}();


///nik
$(document).ready(function () {
  // add & minus count
  $(".minus-basket-btn").click(function () {
    var input = $(this).parent(".add-basket-block").find(".sum-count-input")
    var count_minus = input.val();
    if (count_minus != 1) {
      count_minus--;
      input.val(count_minus);
    } else {
      $(this).parents(".product-bottom").removeClass("active");
    }
  });

  $(".plus-basket-btn").click(function () {
    var input = $(this).parent(".add-basket-block").find(".sum-count-input");
    input.val(parseInt(input.val()) + 1);
  });

  $('.sum-count-input').on('keydown', function (e) {
    if (e.key.length == 1 && e.key.match(/[^0-9'".]/)) {
      return false;
    };
  })

  $(".add-basket-btn").click(function () {
    $(this).parent(".product-bottom").addClass("active");
  });


  $(".range-slider-price").slider({
    min: 0,
    max: 5000,
    values: [2000, 3000],
    range: true,
    animate: "fast",
    slide: function (event, ui) {
      $(".range-slider-price-left").val(ui.values[0]);
      $(".range-slider-price-right").val(ui.values[1]);
    }
  });
  $(".range-slider-price-left").val($(".range-slider-price").slider("values", 0));
  $(".range-slider-price-right").val($(".range-slider-price").slider("values", 1));
  $(".range-slider-container input").change(function () {
    var input_left = $(".range-slider-price-left").val().replace(/[^0-9]/g, ''),
      opt_left = $(".range-slider-price").slider("option", "min"),
      where_right = $(".range-slider-price").slider("values", 1),
      input_right = $(".range-slider-price-right").val().replace(/[^0-9]/g, ''),
      opt_right = $(".range-slider-price").slider("option", "max"),
      where_left = $(".range-slider-price").slider("values", 0);
    if (input_left > where_right) {
      input_left = where_right;
    }
    if (input_left < opt_left) {
      input_left = opt_left;
    }
    if (input_left == "") {
      input_left = 0;
    }
    if (input_right < where_left) {
      input_right = where_left;
    }
    if (input_right > opt_right) {
      input_right = opt_right;
    }
    if (input_right == "") {
      input_right = 0;
    }
    $(".range-slider-price-left").val(input_left);
    $(".range-slider-price-right").val(input_right);
    if (input_left != where_left) {
      $(".range-slider-price").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
      $(".range-slider-price").slider("values", 1, input_right);
    }
  });


  $(".range-slider-maxload").slider({
    min: 0,
    max: 5000,
    values: [2000, 3000],
    range: true,
    animate: "fast",
    slide: function (event, ui) {
      $(".range-slider-maxload-left").val(ui.values[0]);
      $(".range-slider-maxload-right").val(ui.values[1]);
    }
  });
  $(".range-slider-maxload-left").val($(".range-slider-maxload").slider("values", 0));
  $(".range-slider-maxload-right").val($(".range-slider-maxload").slider("values", 1));
  $(".range-slider-container input").change(function () {
    var input_left = $(".range-slider-price-left").val().replace(/[^0-9]/g, ''),
      opt_left = $(".range-slider-maxload").slider("option", "min"),
      where_right = $(".range-slider-maxload").slider("values", 1),
      input_right = $(".range-slider-maxload-right").val().replace(/[^0-9]/g, ''),
      opt_right = $(".range-slider-maxload").slider("option", "max"),
      where_left = $(".range-slider-maxload").slider("values", 0);
    if (input_left > where_right) {
      input_left = where_right;
    }
    if (input_left < opt_left) {
      input_left = opt_left;
    }
    if (input_left == "") {
      input_left = 0;
    }
    if (input_right < where_left) {
      input_right = where_left;
    }
    if (input_right > opt_right) {
      input_right = opt_right;
    }
    if (input_right == "") {
      input_right = 0;
    }
    $(".range-slider-maxload-left").val(input_left);
    $(".range-slider-maxload-right").val(input_right);
    if (input_left != where_left) {
      $(".range-slider-maxload").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
      $(".range-slider-maxload").slider("values", 1, input_right);
    }
  });

});
//tabs
var $tabs = function (target) {
  var
    _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
    _eventTabsShow,
    _showTab = function (tabsLinkTarget) {
      var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
      tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
      tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
      tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
      // если следующая вкладка равна активной, то завершаем работу
      if (tabsLinkTarget === tabsLinkActive) {
        return;
      }
      // удаляем классы у текущих активных элементов
      if (tabsLinkActive !== null) {
        tabsLinkActive.classList.remove('tabs__link_active');
      }
      if (tabsPaneShow !== null) {
        tabsPaneShow.classList.remove('tabs__pane_show');
      }
      // добавляем классы к элементам (в завимости от выбранной вкладки)
      tabsLinkTarget.classList.add('tabs__link_active');
      tabsPaneTarget.classList.add('tabs__pane_show');
      document.dispatchEvent(_eventTabsShow);
    },
    _switchTabTo = function (tabsLinkIndex) {
      var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
      if (tabsLinks.length > 0) {
        if (tabsLinkIndex > tabsLinks.length) {
          tabsLinkIndex = tabsLinks.length;
        } else if (tabsLinkIndex < 1) {
          tabsLinkIndex = 1;
        }
        _showTab(tabsLinks[tabsLinkIndex - 1]);
      }
    };

  _eventTabsShow = new CustomEvent('tab.show', {
    detail: _elemTabs
  });

  _elemTabs.addEventListener('click', function (e) {
    var tabsLinkTarget = e.target;
    // завершаем выполнение функции, если кликнули не по ссылке
    if (!tabsLinkTarget.classList.contains('tabs__link')) {
      return;
    }
    // отменяем стандартное действие
    e.preventDefault();
    _showTab(tabsLinkTarget);
  });

  return {
    showTab: function (target) {
      _showTab(target);
    },
    switchTabTo: function (index) {
      _switchTabTo(index);
    }
  }

};
$tabs('.order-confirm__reciev-method-tabs');
$tabs('.order-confirm__payments-method-tabs');
$tabs('.legal-person__tabs');
//tabs


/////////nik
