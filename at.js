/*!
 * at Javascript library - inspired by jQuery
 * 
 * Author: Mark Surnin
 */

function at(identifier) {

  // Default object to return when no parameter is given to the constructor.
  var defaultMessage = {
    text: 'Where are you at?',
    version: 0.1,
    author: 'Mark Surnin',
  };

  if (identifier) {

    // Return a new `at` object if we are in the global scope.
    if (window === this) {
      return new at(identifier);
    }

    /**
     * Определяет, по какому принципу выбирать элементы - по id или по классу.
     *
     * Так как getElementsByClassName возвращает HTMLCollection, я решил
     * поместить результат getElementById в массив для возможности итерации.
     */
    if (identifier[0] === '#') {
      this.e = [document.getElementById(identifier.slice(1, identifier.length))];
      return this;
    } else if (identifier[0] === '.') {
      this.e = document.getElementsByClassName(identifier.slice(1, identifier.length));
      return this;
    }
    
  } else {
    // Ни один параметр не был передан функции-конструктору -> необходимо вернуть defaultMessage.
    return defaultMessage;
  }
};

/**
 * Методы библиотеки. Стоит заметить, что в каждой из них присутсвует цикл,
 * так как операция производится либо над массивом (id), либо над HTMLCollection (класс). 
 * 
 * Если есть предложения, как можно причесать данную часть кода, буду только рад их услышать.
 */

at.prototype = {
  // Установить аттрибут value
  value: function(newVal) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].value = newVal;
    }
    return this;
  },

  // Установить содержание элемента
  html: function(content) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].innerHTML = content;
    }
    return this;
  },

  // Сбросить свойство display (показать элементы)
  show: function() {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.display = '';
    }
    return this;
  },

  // Установить свойство display элемента как hidden (спрятать элементы)
  hide: function() {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.display = 'none';
    }
    return this;
  },

  // Переключить видимость элементов
  toggle: function() {
    for (var i = 0; i < this.e.length; i++) {
      if (this.e[i].style.display !== 'none') {
        this.e[i].style.display = 'none';
      } else {
        this.e[i].style.display = 'inherit';
      }
    }
    return this;
  },

  // Установить цвет элементов
  color: function(color) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.color = color;
    }
    return this;
  },

  // Установить фонового цвета элементов
  bgColor: function(color) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.backgroundColor = color;
    }
    return this;
  },

  // Установить высоту элементов
  height: function(height) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.height = height + 'px';
    }
    return this;
  },

  // Установить ширину элементов
  width: function(width) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.width = width + 'px';
    }
    return this;
  },  

  // Установить высоту и ширину элементов
  size: function(height, width) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.height = height + 'px';
      this.e[i].style.width = width + 'px';
    }
    return this;
  },

  // Установить размер шрифта элементов
  fontSize: function(size) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.fontSize = size + 'px';
    }
    return this;
  },

  // Установить поля элементов
  margin: function(p1, p2, p3, p4) {
    for (var i = 0; i < this.e.length; i++) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.e[i].style.margin = p1 + 'px';
          break;
        case 2:
          this.e[i].style.marginTop = p1 + 'px';
          this.e[i].style.marginBottom = p1 + 'px';
          this.e[i].style.marginLeft = p2 + 'px';
          this.e[i].style.marginRight = p2 + 'px';
          break;
        case 3:
          this.e[i].style.marginTop = p1 + 'px';
          this.e[i].style.marginBottom = p3 + 'px';
          this.e[i].style.marginLeft = p2 + 'px';
          this.e[i].style.marginRight = p2 + 'px';
          break;
        default:
          this.e[i].style.marginTop = p1 + 'px';
          this.e[i].style.marginBottom = p3 + 'px';
          this.e[i].style.marginLeft = p4 + 'px';
          this.e[i].style.marginRight = p2 + 'px';
          break;        
      }
    }
    return this;
  },

  // Установить отступы элементов
  padding: function(p1, p2, p3, p4) {
    for (var i = 0; i < this.e.length; i++) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.e[i].style.padding = p1 + 'px';
          break;
        case 2:
          this.e[i].style.paddingTop = p1 + 'px';
          this.e[i].style.paddingBottom = p1 + 'px';
          this.e[i].style.paddingLeft = p2 + 'px';
          this.e[i].style.paddingRight = p2 + 'px';
          break;
        case 3:
          this.e[i].style.paddingTop = p1 + 'px';
          this.e[i].style.paddingBottom = p3 + 'px';
          this.e[i].style.paddingLeft = p2 + 'px';
          this.e[i].style.paddingRight = p2 + 'px';
          break;
        default:
          this.e[i].style.paddingTop = p1 + 'px';
          this.e[i].style.paddingBottom = p3 + 'px';
          this.e[i].style.paddingLeft = p4 + 'px';
          this.e[i].style.paddingRight = p2 + 'px';
          break;        
      }
    }
    return this;
  },

  // Вспомогательная функция для регистрирации обработчика события
  addListener: function(event, cb) {
    for (var i = 0; i < this.e.length; i++) {
      // Shamelessly borrowed from http://www.w3schools.com/js/js_htmldom_eventlistener.asp

      // For all major browsers, except IE 8 and earlier
      if (this.e[i].addEventListener) {
          this.e[i].addEventListener(event, cb, false);
      } 
      // For IE 8 and earlier versions
      else if (this.e[i].attachEvent) {
          this.e[i].attachEvent(event, cb);
      }
    }
  },

  // Зарегистрировать обработчик события click
  click: function(cb) {
    for (var i = 0; i < this.e.length; i++) {
      this.addListener('click', cb);
    }
    return this;
  },

  // Зарегистрировать обработчик события mouseover
  mouseover: function(cb) {
    for (var i = 0; i < this.e.length; i++) {
      this.addListener('mouseover', cb);
    }
    return this;
  },

  // Зарегистрировать обработчик события mouseout
  mouseout: function(cb) {
    for (var i = 0; i < this.e.length; i++) {
      this.addListener('mouseout', cb);
    }
    return this;
  },
};