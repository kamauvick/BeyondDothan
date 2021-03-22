module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero1': "url('https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        'hero-pattern': "url('https://media.swncdn.com/cms/CCOM/46076-old-church.630w.tn.jpg')",
        'logo-icon': "/res/beyond_dothan_logo",
       }),
      fontFamily: {
        'caudex': ['caudex',],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
