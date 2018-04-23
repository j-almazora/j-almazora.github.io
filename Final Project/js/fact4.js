var factDisplay = document.getElementById("factDisplay"),
    esophagus = document.getElementById("esophagus"),
    liver = document.getElementById("liver"),
    stomach = document.getElementById("stomach"),
    largeIntestine = document.getElementById("largeIntestine"),
    smallIntestine = document.getElementById("smallIntestine"),
    brain = document.getElementById("brain");

//random facts for esophagus

var esophagusFacts = ['The esophagus is made of muscles that contract to move food to the stomach — This process is called peristalsis.', 'The esophagus is a tube that connects the throat (pharynx) and the stomach.', 'To promote good Esophagus health, quit smoking.', 'To promote good Esophagus health, when going to bed, try lying on the left side rather than the right side.', 'To promote good Esophagus health, after meals, take a walk or stay upright.'];

var randomEsophagus = esophagusFacts[Math.round(Math.random() * esophagusFacts.length)];

esophagus.addEventListener("click", function () {
    factDisplay.innerHTML += "<h2>" + randomEsophagus + "</h2>";
});

//random facts for liver

var liverFacts = ['Liver stores energy in the form of a sugar called glycogen.', 'Liver produces an important digestive liquid called bile.', 'The liver also detoxifies chemicals and metabolizes drugs.', 'Liver is the largest organ in the body', 'Liver cells take several years to replace themselves'];

var randomLiver = liverFacts[Math.round(Math.random() * liverFacts.length)];

liver.addEventListener("click", function () {
    factDisplay.innerHTML += "<h2>" + randomLiver + "</h2>";
    factDisplay.removeChild(factDisplay.firstElementChild);
});

//brain fact

brain.addEventListener("click", function () {
    factDisplay.innerHTML = "<h2>The gut is the only organ system that can perform its functions without the oversight of the brain.</h2>";
});