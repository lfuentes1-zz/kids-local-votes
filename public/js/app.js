class AttractionsDashboard extends React.Component {
    state = {
        attractions: [
            {
                attractionId: uuid.v4(),
                attractionName:"Sea World",
                attractionDescription:"SeaWorld San Antonio is a 250-acre marine mammal park, oceanarium, and animal theme park.  SeaWorld San Antonio is a 250-acre marine mammal park, oceanarium, and animal theme park.",
                attractionUrl:"http://seaworld.com/san-antonio/",
                attractionImageUrl:"images/attractions/image-seaworldsalogo.png",
                attractionVoteCount:"32",
                attractionLastVoteAvatarUrl:"images/avatars/veronika.jpg",
                attractionLastVoteName:"Kristy",    
            },
            {
                attractionId: uuid.v4(),
                attractionName:"SA Zoo",
                attractionDescription:"The 35-acre zoo has a collection of over 3,500 animals representing 750 species.",
                attractionUrl:"http://sazoo.org/",
                attractionImageUrl:"images/attractions/image-sanantoniozoo.png",
                attractionVoteCount:"45",
                attractionLastVoteAvatarUrl:"images/avatars/daniel.jpg",
                attractionLastVoteName:"Daniel",
            },
        ],
    };

    _handleCreateFormSubmit = (attraction) => {
        this._createAttraction(attraction);
    };

    _createAttraction = (attraction) => {
        const a = helpers.newAttraction(attraction);
        this.setState({
            attractions: this.state.attractions.concat(a),
        });
    };

    render() {
        return (
            <div>
                <EditableAttractionList 
                    attractions={this.state.attractions}
                />
                <ToggleableAttractionForm 
                    onFormSubmit={this._handleCreateFormSubmit}
                />
            </div>           
        );
    }
}

class ToggleableAttractionForm extends React.Component {
    state = {
        isOpen: false,
    };

    _handleFormOpen = () => {
        this.setState({ isOpen: true });
    };

    _handleFormClose = () => {
        this.setState({ isOpen: false });
    };

    _handleFormSubmit = (attraction) => {
        this.props.onFormSubmit(attraction);
        this.setState({ isOpen: false });
    };

    render() {
        if (this.state.isOpen) {
            return (
                <AttractionForm
                    onFormSubmit={this._handleFormSubmit}
                    onFormClose={this._handleFormClose}
                />
            );
        } else {
            return (
                <div className="ui basic content center aligned segment">
                    <button
                        className="ui basic button icon"
                        onClick={this._handleFormOpen}
                    >
                        <i className="plus icon" />
                    </button>
                </div>
            );
        }        
    }
}

class EditableAttractionList extends React.Component {
    render() {
        const attractions= this.props.attractions.map((attraction) => (
            <EditableAttraction
                    key={"attraction-" + attraction.attractionId}
                    attractionId={attraction.attractionId}
                    attractionName={attraction.attractionName}
                    attractionDescription={attraction.attractionDescription}
                    attractionUrl={attraction.attractionUrl}
                    attractionImageUrl={attraction.attractionImageUrl}
                    attractionVoteCount={attraction.attractionVoteCount}
                    attractionLastVoteAvatarUrl={attraction.attractionLastVoteAvatarUrl}
                    attractionLastVoteName={attraction.attractionLastVoteName}
            />
        ));
        return (
            <div id="attractions" className="ui divided items">
                {attractions}
            </div>
        );
    }
}

class EditableAttraction extends React.Component {
    state = {
        editFormOpen: false,
    };

    render() {
        if (this.props.editFormOpen) {
            return (
                <AttractionForm
                    attractionId={this.props.attractionId}
                    attractionName={this.props.attractionName}
                    attractionDescription={this.props.attractionDescription}
                    attractionUrl={this.props.attractionUrl}
                    attractionImageUrl={this.props.attractionImageUrl}
                />
            );
        } else {
            return (
                <Attraction 
                    attractionId={this.props.attractionId}
                    attractionName={this.props.attractionName}
                    attractionDescription={this.props.attractionDescription}
                    attractionUrl={this.props.attractionUrl}
                    attractionImageUrl={this.props.attractionImageUrl}
                    attractionVoteCount={this.props.attractionVoteCount}
                    attractionLastVoteAvatarUrl={this.props.attractionLastVoteAvatarUrl}
                    attractionLastVoteName={this.props.attractionLastVoteName}
                />
            );
        }
    }
}

class AttractionForm extends React.Component {
    state = {
        attractionName: this.props.attractionName || '',
        attractionDescription: this.props.attractionDescription || '',
        attractionUrl: this.props.attractionUrl || '',
        attractionImageUrl: this.props.attractionImageUrl || '',
    };

    _handleAttractionNameChange = (e) => {
        this.setState({ attractionName: e.target.value })
    };

    _handleAttractionDescriptionChange = (e) => {
        this.setState({ attractionDescription: e.target.value })
    };

    _handleAttractionUrlChange = (e) => {
        this.setState({ attractionUrl: e.target.value })
    };

    _handleAttractionImageUrlChange = (e) => {
        this.setState({ attractionImageUrl: e.target.value })
    };

    _handleSubmit = () => {
        this.props.onFormSubmit({
            attractionId: this.props.attractionId,
            attractionName: this.state.attractionName,
            attractionDescription: this.state.attractionDescription,
            attractionUrl: this.state.attractionUrl,
            attractionImageUrl: this.state.attractionImageUrl,
        });
    };

    render () {
        const submitText = this.props.attractionId ? "Update" : "Create";
        return (
            <div className="item">
                <div className="ui small image">
                    <img src={this.state.attractionImageUrl} />
                </div>
                <div className="middle aligned content">
                    <div className="ui form">
                        <div className="field">
                            <label>Attraction Name</label>
                            <input
                                type="text"
                                value={this.state.attractionName}
                                onChange={this._handleAttractionNameChange}
                            />
                        </div>
                        <div className="field">
                            <label>Attraction Description</label>
                            <input
                                type="text"
                                value={this.state.attractionDescription}
                                onChange={this._handleAttractionDescriptionChange}
                            />
                        </div>
                        <div className="field">
                            <label>Attraction Website</label>
                            <input
                                type="text"
                                value={this.state.attractionUrl}
                                onChange={this._handleAttractionUrlChange}
                            />
                        </div>
                        <div className="field">
                            <label>Attraction Image</label>
                            <input
                                type="text"
                                value={this.state.attractionImageUrl}
                                onChange={this._handleAttractionImageUrlChange}
                            />
                        </div>
                        <div className="ui two bottom attached buttons">
                            <button
                                className="ui basic blue button"
                                onClick={this._handleSubmit}
                            >
                                {submitText}
                            </button>
                            <button
                                className="ui basic red button"
                                onClick={this.props.onFormClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

class Attraction extends React.Component {
    render() {
        return(
            <div className="item">
                <div className="ui small image">
                    <img src={this.props.attractionImageUrl} />
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        <span className="meta">
                            Number of Likes:
                        </span>
                        {this.props.attractionVoteCount}
                    </div>
                    <div className="description">
                        <a href={this.props.attractionUrl}>
                            {this.props.attractionName}
                        </a>
                        <p>
                            {this.props.attractionDescription}
                        </p>
                    </div>
                    <div className="extra content">
                        <span className='right floated edit icon'>
                            <i className='edit icon' />
                        </span>
                        <span className='right floated trash icon'>
                            <i className='trash icon' />
                        </span>
                    </div>
                </div>
            </div> 
        );
    }
}

ReactDOM.render(
    <AttractionsDashboard />,
    document.getElementById("content")
);
