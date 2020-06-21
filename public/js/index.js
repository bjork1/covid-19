// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $exampleName = $("#example-name");
var $exampleCity = $("#example-city");
var $exampleState = $("#example-state");
var $examplePrice = $("#example-price");

var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example),
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET",
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE",
    });
  },
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)

        //added below
        //.text(example.description)
        .attr("href", "/example/" + example.id);
      var $d = $("<p>").text(example.description);

      var $li = $("<li>").attr({
        class: "list-group-item",
        "data-id": example.id,
      });
      $li.append($a);
      $li.append($d);

      $(".modal-content").append(example.description);
      var $button = $("<button>")
        .addClass("button button-danger float-right delete")
        .text("ｘ");

      var $modalBtn = $("<button id='exampleModal1'>")
        .addClass("button button-primary")
        .text("View Info");

      $li.append($button);
      $li.append($modalBtn);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
$("#exampleModal1").on("click", handleModal);

function handleModal() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      $(".modal-content").append("<p>" + example.description + "</p>");
    });
  });
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("exampleModal1");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
