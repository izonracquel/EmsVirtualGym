var db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);
db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS tblHintsTips (text, text)');
  tx.executeSql('INSERT INTO tblHintsTips (Title, text) VALUES ("Respect the headphones", "Singles, feel free to mingle, but when those ear buds are in, consider that fair warning. Ms. Independent is game - for the leg press, that is.")');
});
