let mono;

function setup() {
  createCanvas(1350,563);
  mono = loadFont("FranklinGothic-MediumCond-48.vlw");
  fill(2,146,84);
  textFont(mono);
  textSize(50);
  textAlign(CENTER);
  text("Los Perros", width / 2, 30);
  textSize(50);
  textAlign(CENTER);
  text("El perro (Canis familiaris o Canis lupus familiaris), llamado perro doméstico o can es un", width / 2, 60);
  text("mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis.", width / 2, 90);
  text("En el 2013, la población mundial estimada de perros estaba entre 700.000.000 y 987.000.000.", width / 2, 120);
  text("Su tamaño (o talla), su forma y su pelaje es muy diverso y varía según la raza.", width / 2, 150);
  text("Posee un oído y un olfato muy desarrollados, y este último es su principal órgano sensorial.", width / 2, 180);
  text("Su longevidad media es de diez a trece años, dependiendo de la raza.", width / 2, 210);
  text("El perro doméstico proviene de un grupo ancestral común que data de hace aproximadamente ", width / 2, 240);
  text("treinta mil años, y desde entonces se ha extendido a todas partes del mundo.", width / 2, 270);
  text("Los primeros restos fósiles de perros enterrados junto con seres humanos se ", width / 2, 300);
  text("encontraron en Israel, y datan de hace unos doce mil años.", width / 2, 330);
  text("Desde entonces, los perros y los humanos han evolucionado conjuntamente, ", width / 2, 360);
  text("tanto en las culturas africanas y euroasiáticas, como en las", width / 2, 390);
  text("que poblaron América y se mantuvieron sin contacto con aquellas hasta el siglo XV.", width / 2, 410);
}
