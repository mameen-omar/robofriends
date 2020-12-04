import React from 'react'

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render(onChange) {
        return (
            <div className={'pa2'}>
                <input
                    className={'pa3 ba b--green bg-lightest-blue'}
                    onChange={this.props.onChange}
                    placeholder={'Look for \'em'}
                />
            </div>
        );
    }
}

export default SearchBox;