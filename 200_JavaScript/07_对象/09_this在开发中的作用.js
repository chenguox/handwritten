var info = {
  name: 'cgx',
  age: 18,
  running: function () {
    console.log('running~', this.name)
  },
  eating: function () {
    console.log('eating~', this.name)
  },
  studying: function () {
    console.log('studying~', this.name)
  },
}

info.running()
info.eating()
info.studying()
