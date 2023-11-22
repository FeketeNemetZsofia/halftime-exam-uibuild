const rootElement = document.querySelector("#root")
rootElement.insertAdjacentHTML("beforeend", 
`<form>
<h1>Visszajelzés</h1>
<input type="text" placeholder="Tárgy" class=""targy>
<textarea type="text" placeholder="Megjegyzés"></textarea>
<div>
<div><input type="checkbox"><p>Elolvastam és elfogadom az <a href="https://yro.slashdot.org/story/08/09/03/2130233/the-5-most-laughable-terms-of-service-on-the-net" target="blank">Adatkezelési Tájékoztatót<a></p></div>
<div><input type="checkbox"><p>Szeretnék hírlevelet kapni</p></div></div>
<button>Mentés</button>

</form>`)