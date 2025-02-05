import {ref, onMounted} from 'vue';

function setLoadedOnComponent(emit, lazyLoaded) {
  emit('loaded');
  lazyLoaded.value = true;
}

function loadSrc(element, observerOptions, emit, lazyLoaded) {
  var videoTag = element.tagName === 'VIDEO';
  var loadingClass = videoTag ? 'video-loading' : 'img-loading';
  var loadedClass = videoTag ? 'video-loaded' : 'img-loaded';

  if (observerOptions.disableFade) {
    element.classList.add('no-fade');
  }

  // add 'loading' class to <img> or <video> element
  element.classList.add(loadingClass);

  // retrieve data-src and apply value to element src (loan / show src)
  if (videoTag) {
    for (let elementChild of element.children) {
      if (elementChild.tagName === 'SOURCE') {
        elementChild.setAttribute('src', elementChild.dataset.src);
        element.load();
      }
    }
  } else {
    element.setAttribute('src', element.dataset.src);
  }

  // create image loaded event listener
  element.addEventListener(
    'load',
    function () {
      loadedState();
    },
    false
  );

  // create video loaded event listener
  element.addEventListener(
    'loadeddata',
    function () {
      loadedState();
    },
    false
  );

  function loadedState() {
    // remove 'loading' class to <img> or <video> element
    element.classList.remove(loadingClass);

    // add 'loaded' class to <img> or <video> element
    setTimeout(() => {
      element.classList.add(loadedClass);
      setLoadedOnComponent(emit, lazyLoaded);
    }, 50);
  }
}

function loadElement(element, observerOptions, emit, lazyLoaded) {
  emit('load');

  // case IMAGE || VIDEO tag
  if (element.tagName === 'IMG' || element.tagName === 'VIDEO') {
    loadSrc(element, observerOptions, emit, lazyLoaded);
  }

  // case PICTURE tag
  if (element.tagName === 'PICTURE') {
    // loop on picture elements children
    for (let elementChild of element.children) {
      // case SOURCE
      if (elementChild.tagName === 'SOURCE') {
        // retrieve data-src and apply value to element srcset (loan / show image)
        elementChild.setAttribute('srcset', elementChild.dataset.src);
        setLoadedOnComponent(emit, lazyLoaded);
      }

      // case IMG
      if (elementChild.tagName === 'IMG') {
        loadSrc(elementChild, observerOptions, emit, lazyLoaded);
      }
    }
  }
}

function initObserver(el, observerOptions, emit, lazyLoaded) {
  // create observer instance
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const intersectingElement = entry.target;
        loadElement(intersectingElement, observerOptions, emit, lazyLoaded);
        observer.unobserve(intersectingElement);
        observer.disconnect();
      }
    });
  }, observerOptions);

  // add element to intersection observer
  observer.observe(el);
}

export default function useLazyLoad(options = {}, emit) {
  const el = ref(null);
  const lazyLoaded = ref(false);

  const observerOptions = {
    disableFade: options.disableFade || false,
    root: options.root || null,
    rootMargin: options.rootMargin || '400px',
    threshold: options.threshold || 0
  };

  onMounted(() => {
    if (el.value) {
      // attach initial class to lazy loaded <img> tag
      if (el.value.tagName === 'IMG') {
        // tag lazy loaded image
        el.value.classList.add('lazy-image');
      }
      // attach initial class to lazy loaded <picture> tag
      if (el.value.tagName === 'PICTURE') {
        el.value.children.item(el.value.children.length - 1).classList.add('lazy-image');
      }
      // attach initial class to lazy loaded <video> tag
      if (el.value.tagName === 'VIDEO') {
        el.value.classList.add('lazy-video');
      }

      // do we support intersection observer?
      if ('IntersectionObserver' in window) {
        initObserver(el.value, observerOptions, emit, lazyLoaded);
      } else {
        // not supported (ie 11, etc.)
        loadElement(el.value, observerOptions, emit, lazyLoaded);
      }
    }
  });

  return {
    el,
    lazyLoaded
  };
}
