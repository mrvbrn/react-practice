
class ClickCounter extends React.Component {
    constructor(props) {
    super(props);
    this.state = { count: 0, previousCount: []};

    }
click(event){
    this.setState({count: this.state.count + 1 });
}

reset(event){
    const previousCount = this.state.previousCount;
    previousCount.push(this.state.count);
    this.setState({count: 0, previousCount});

    
}

render(){
    return(
    <div>
    <button onClick={this.click.bind(this)}>CLICK ME!!!</button>
        <span>{this.state.count}</span>
    <br/>
    <button onClick={this.reset.bind(this)}>RESET </button>
    <ul>
        {
        this.state.previousCount.map((count, idx) => <li key={idx}>{count}</li>)
        }
    </ul>

    </div>
    );
   }
}
