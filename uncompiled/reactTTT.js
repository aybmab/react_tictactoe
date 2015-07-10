      var EmptySquare = " ";
      var initialModel = [  [" ", " ", " "],
                            [" ", " ", " "],
                            [" ", " ", " "]
                          ];

      var Square = React.createClass({
        handleClick: function(event) {
          if (this.props.value === EmptySquare) this.props.handleClickSquare(this.props.x, this.props.y);
        },
        render: function() {  
          console.log("Rendering a Square", this);
          return (
            <span className="square" onClick={this.handleClick}>
              {this.props.value}
            </span>
          );
        }
      });
      

      var Row = React.createClass({
        render: function() {  
          console.log("Rendering a Row", this);
          var handleClickSquare = this.props.handleClickSquare;
          console.log("the passed handler: ", handleClickSquare);
          var rowIndex = this.props.y;

          var squares = [];
          this.props.squares.forEach(function(square, index){
            squares.push(<Square value={square} y={rowIndex} x={index} handleClickSquare={handleClickSquare}/>);
          });
          return (
            <div className="row">
              {squares}
            </div>
          );
        }
      });

      var Board = React.createClass({
        render: function(){
          console.log("Rendering a Board", this);
          var handleClickSquare = this.props.handleClickSquare;
          console.log("the passed handler: ", handleClickSquare);
          var rows = [];
          this.props.tttRows.forEach(function(row, index){
            rows.push(<Row squares={row} y={index} handleClickSquare={handleClickSquare}/>);
          });

          return (
            <div>
              {rows}
            </div>
          );
        }
      });

      var GameDisplay = React.createClass({
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
            <div onClick={this.handleClick}>
              <p>
                {text}.
              </p>
              <Board tttRows={this.state.tttRows} handleClickSquare={this.handleClickedSquare}/>
            </div>
          );
        }
      });

      var gameInstance = React.render(
                            <GameDisplay />,
                            document.getElementById('tic-tac-toe-board')
                          );


      function hasGameEnded(model){
        //TODO implement and use to alert users when game has reached 
        //      an end state.

        for (var row = 0; y < models.length; i++) {
          models[i]

        };
      }