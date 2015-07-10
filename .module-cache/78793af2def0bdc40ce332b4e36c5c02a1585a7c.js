      var EmptySquare = " ";
      var initialModel = [  [" ", " ", " "],
                            [" ", " ", " "],
                            [" ", " ", " "]
                          ];

      var Square = React.createClass({displayName: "Square",
        handleClick: function(event) {
          if (this.props.value === EmptySquare) this.props.handleClickSquare(this.props.x, this.props.y);
        },
        render: function() {  
          console.log("Rendering a Square", this);
          return (
            React.createElement("span", {className: "square", onClick: this.handleClick}, 
              this.props.value
            )
          );
        }
      });
      
      var Row = React.createClass({displayName: "Row",
        render: function() {  
          console.log("Rendering a Row", this);
          var handleClickSquare = this.props.handleClickSquare;
          console.log("the passed handler: ", handleClickSquare);
          var rowIndex = this.props.y;

          var squares = [];
          this.props.squares.forEach(function(square, index){
            squares.push(React.createElement(Square, {value: square, y: rowIndex, x: index, handleClickSquare: handleClickSquare}));
          });
          return (
            React.createElement("div", {className: "row"}, 
              squares
            )
          );
        }
      });

      var Board = React.createClass({displayName: "Board",
        render: function(){
          console.log("Rendering a Board", this);
          var handleClickSquare = this.props.handleClickSquare;
          console.log("the passed handler: ", handleClickSquare);
          var rows = [];
          this.props.tttRows.forEach(function(row, index){
            rows.push(React.createElement(Row, {squares: row, y: index, handleClickSquare: handleClickSquare}));
          });

          return (
            React.createElement("div", null, 
              rows
            )
          );
        }
      });

      var GameDisplay = React.createClass({displayName: "GameDisplay",
        getInitialState: function() {
          return {xTurn: true, tttRows: initialModel};
        },
        getCurrentCharacter: function() {
          return this.state.xTurn ? 'X' : 'O';
        },
        handleClickedSquare: function(x, y) {
          // console.log("clicked ("+x+", "+y+")");
          this.state.tttRows[y][x] = this.getCurrentCharacter();
          this.setState({xTurn: !this.state.xTurn, tttRows: this.state.tttRows});
        },
        render: function(){
          console.log("Rendering a GameDisplay", this);
          var modelRows = this.props.tttRows;

          var text = this.state.xTurn ? 'X Turn' : 'O Turn';
          return (
            React.createElement("div", {onClick: this.handleClick}, 
              React.createElement("p", null, 
                text, "."
              ), 
              React.createElement(Board, {tttRows: this.state.tttRows, handleClickSquare: this.handleClickedSquare})
            )
          );
        }
      });

      var gameInstance = React.render(
                            React.createElement(GameDisplay, null),
                            document.getElementById('tic-tac-toe-board')
                          );


      function hasGameEnded(model){
        //TODO implement and use to alert users when game has reached 
        //      an end state.

        for (var row = 0; y < models.length; i++) {
          models[i]

        };
      }