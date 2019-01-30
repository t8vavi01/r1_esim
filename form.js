function form_1() {
  console.log("lomake lähetetty");
  var data="POST-data";
  var form=document.getElementById('form_1');
  var fname=form.en.value;
  var lname=form.sn.value;
  data+="<br>Etunimi="+fname;
  data+="<br>Sukunimi="+lname;
  document.getElementById('result').innerHTML=data;
}
