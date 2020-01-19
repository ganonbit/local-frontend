const Sidebar = {
    sidebar: {
      transition: 'transform .3s ease-out',
      WebkitTransition: '-webkit-transform .3s ease-out',
      willChange: 'transform',
      overflowY: 'initial'
    },
    content: {
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      transition: 'left .3s ease-out, right .3s ease-out'
    },
    overlay: {
      zIndex: 1,
      opacity: 0,
      visibility: 'hidden',
      transition: 'opacity .3s ease-out, visibility .3s ease-out',
      backgroundColor: 'rgba(0,0,0,.3)'
    },
  }
  export default Sidebar
  