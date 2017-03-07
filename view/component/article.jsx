var React = require('react');

module.exports = React.createClass({
	displayName: 'Article',
    render: function render() {
        return (
            <!-- <div id="article">{this.props.title}</div> --> 
            <div id="article" class="">{this.props.intro}</div>
            <div id="article">{this.props.img}</div>
        );
    }
});