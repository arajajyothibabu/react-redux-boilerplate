/**
 * Created by jyothi on 22/8/17.
 */
import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        height: 'auto'
    },
};

export class Tiles extends Component {

    render() {
        const {
            images = [], images_pending, images_failed
        } = this.props;

        return (
            <div>
                {
                    images_pending && <RefreshIndicator
                        size={200}
                        left={'45%'}
                        top={'45%'}
                        status="loading"
                    />
                }
                <GridList
                    cellHeight={360}
                    style={styles.gridList}
                >
                    {images.map((tile) => (
                        <GridTile
                            key={tile.id}
                            title={tile.author_url}
                            subtitle={<span>by <b>{tile.author}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                            <img src={`https://unsplash.it/720/360?image=${tile.id}`} />
                        </GridTile>
                    ))}
                </GridList>
                {
                    images_failed &&
                    <Subheader>Images failed to load..!</Subheader>
                }
            </div>
        )
    }
}