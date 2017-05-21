class AttractionList extends React.Component {
    constructor(props) {
        super(props)    ;

        this.state = {
            attractions: [],
        };
        this._handleAttractionUpVote = this._handleAttractionUpVote.bind(this);
    }

    componentDidMount() {
        this.setState({ attractions: Seed.attractions });
    }

    _handleAttractionUpVote(attractionId) {
        const nextAttractions = this.state.attractions.map((attraction) => {
            if(attraction.id === attractionId) {
                return Object.assign({}, attraction, {
                    votes: attraction.votes + 1,
                });
            } else {
                return attraction;
            }
        });
        this.setState({
            attractions: nextAttractions,
        });        
    }

    render() {
        const attractions = this.state.attractions.sort((a, b) => (b.votes - a.votes));
        const attractionComponents = attractions.map((attraction) => (
            <Attraction
                key={"attraction-" + attraction.id}
                id={attraction.id}
                title={attraction.title}
                description={attraction.description}
                url={attraction.url}
                attractionImageUrl={attraction.attractionImageUrl}
                votes={attraction.votes}
                lastVoteAvatarUrl={attraction.lastVoteAvatarUrl}
                lastVoteName={attraction.lastVoteName}
                onVote={this._handleAttractionUpVote}
            />   
        ));
        return (
            <div className="ui unstackable items">
                {attractionComponents}
            </div>
        );
    }
}

class Attraction extends React.Component {
    constructor(props) {
        super(props);

        this._handleUpVote = this._handleUpVote.bind(this);
    }

    _handleUpVote() {
        this.props.onVote(this.props.id);
    }

    render() {
        return(
            <div className="item">
                <div className="image">
                    <img src={this.props.attractionImageUrl} />
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        <a onClick={this._handleUpVote}>
                            <i className="large caret up icon" />
                        </a>
                        {this.props.votes}
                    </div>
                    <div className="description">
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                    <div className="extra">
                        <span>Last vote by:</span>
                        <img
                            className="ui avatar image"
                            src={this.props.lastVoteAvatarUrl}
                        />
                        <span>{this.props.lastVoteName}</span>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <AttractionList />,
    document.getElementById("content")
);
