Draggable.create(".box", {type:"x,y",
edgeResistance:0.65,
bounds: document.querySelector("div.container"),
throwProps:true,
zIndexBoost:false,
// onRelease:function() {
//     TweenMax.set(this.target, {zIndex:0});
//   }
});

const archiveTag = document.querySelector("div.archive")
const dropdownTag = document.querySelector("div.dropdown-content")

archiveTag.addEventListener("click", function() {
  dropdownTag.classList.toggle("dropDownOpen")
})
