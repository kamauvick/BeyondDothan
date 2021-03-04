module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero1': "url('https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80')",
        'hero2': "url('res\images\hero2.jpg')",
        'hero3': "url('res\images\hero3.jpg')",
        'hero-pattern': "url('https://images.unsplash.com/photo-1487616892920-df7106ed3512?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGNodXJjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
        'footer-texture': "url('https://unsplash.com/photos/M1VfDMOrfSw')",
        'logo-icon': "/res/beyond_dothan_logo",
        'logo48':"url('C:\Users\v-viwaic\Desktop\Vick\BeyondDothan\res\images')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
