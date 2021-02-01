function family(relationship) {
    var charactertype = relationship.getAttribute("data-relationship"); 
    alert(relationship.innerHTML + " is my " + charactertype);

}