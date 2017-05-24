class AttractionsDashboard extends React.Component {
    render() {
        return (
            <div>
                <EditableAttractionList />
                <ToggleableAttractionForm 
                    isOpen={false}
                />
            </div>           
        );
    }
}

class ToggleableAttractionForm extends React.Component {
    render() {
        if (this.props.isOpen) {
            return (
                <AttractionForm />
            );
        } else {
            return (
                <div className="ui basic content center aligned segment">
                    <button className="ui basic button icon">
                        <i className="plus icon" />
                    </button>
                </div>
            );
        }        
    }
}

class EditableAttractionList extends React.Component {
    render() {
        return (
            <div id="attractions" className="ui divided items">
                <EditableAttraction
                    key="1"
                    attractionId="1"
                    attractionName="Sea World"
                    attractionDescription="Sea World Description"
                    attractionUrl="https://seaworld.com/san-antonio/"
                    attractionImageUrl="images/attractions/image-seaworldsalogo.png"
                    attractionVoteCount="32"
                    attractionLastVoteAvatarUrl="images/avatars/veronika.jpg"
                    attractionLastVoteName="Kristy"
                    editFormOpen={false}
                />

                <EditableAttraction
                    key="2"
                    attractionId="2"
                    attractionName="SA Zoo"
                    attractionDescription="SA Zoo Description"
                    attractionUrl="https://sazoo.org/"
                    attractionImageUrl="images/attractions/image-sanantoniozoo.png"
                    attractionVoteCount="45"
                    attractionLastVoteAvatarUrl="images/avatars/daniel.jpg"
                    attractionLastVoteName="Daniel"
                    editFormOpen={false}
                />
            </div>
        );
    }
}

class EditableAttraction extends React.Component {
    render() {
        if (this.props.editFormOpen) {
            return (
                <AttractionForm
                    attractionName={this.props.attractionName}
                    attractionDescription={this.props.attractionDescription}
                    attractionUrl={this.props.attractionUrl}
                    attractionImageUrl={this.props.attractionImageUrl}
                />
            );
        } else {
            return (
                <Attraction 
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
    render () {
        const submitText = this.props.attractionName ? "Update" : "Create";
        return (
            <div className="item">
                <div className="ui small image">
                    <img src={this.props.attractionImageUrl} />
                </div>
                <div className="middle aligned content">
                    <div className="ui form">
                        <div className="field">
                            <label>Attraction Name</label>
                            <input type="text" defaultValue={this.props.attractionName} />
                        </div>
                        <div className="field">
                            <label>Attraction Description</label>
                            <input type="text" defaultValue={this.props.attractionDescription} />
                        </div>
                        <div className="field">
                            <label>Attraction Website</label>
                            <input type="text" defaultValue={this.props.attractionUrl} />
                        </div>
                        <div className="field">
                            <label>Attraction Image</label>
                            <input type="text" defaultValue={this.props.attractionImageUrl} />
                        </div>
                        <div className="ui two bottom attached buttons">
                            <button className="ui basic blue button">
                                {submitText}
                            </button>
                            <button className="ui basic red button">
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
                        <a >
                            <i className="large caret up icon" />
                        </a>
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
                    <div className="extra">
                        <span>Last vote by:</span>
                        <img
                            className="ui avatar image"
                            src={this.props.attractionLastVoteAvatarUrl}
                        />
                        <span>{this.props.attractionLastVoteName}</span>
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
