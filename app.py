from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
   title = "Beyond Dothan Experience"
   return render_template("index.html", title=title)
    #  return "Hello Flask"


@app.route("/who_we_are")
def who_we_are():
   return render_template("who_we_are.html")
    #  return "Hello Flask"



@app.route("/learn_with_us")
def learn_with_us():
   return render_template("learn_with_us.html")
    #  return "Hello Flask"



@app.route("/connect_with_us")
def connect_with_us():
   return render_template("connect_with_us.html")
    #  return "Hello Flask"



@app.route("/our_resources")
def our_resources():
   return render_template("our_resources.html")
    #  return "Hello Flask"



if __name__ == "__main__":
   app.run(debug=True)