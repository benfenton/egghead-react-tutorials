var App = React.createClass({
    getDefaultProps:function(){
        return {
            txt: 'this is a default prop',
            cat: 0
        }
    },
    propTypes: {
        txt: React.PropTypes.string,
        cat: React.PropTypes.number.isRequired
    },
    getInitialState:function(){
        return {
            txt: 'the inital state',
            id: 0
        }
    },
    update: function(e) {
        this.setState({txt: e.target.value});
    },
    render:function(){
    var txt = this.state.txt
        return (
            <div>
                <input type="text" onChange={this.update} />
                <h1>{txt}</h1>
            </div>
        );
    }
});

React.render(<App cat={5} />, document.getElementById('myContainer'));
