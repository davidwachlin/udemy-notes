import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';

const styles = {
	card: {
		maxWidth: '185.25px',
		maxHeight: '300px',
		padding: '0',
        boxSizing: 'border-box',
        margin: '1rem'
	},
	content: {
		height: '60px',
		boxSizing: 'border-box',
		overflow: 'scroll',
		background: '#121212;'
	},
	actions: {}
};

export default class CourseCard extends Component {
	render() {
		return (
			<GridListTile>
				<Card style={styles.card}>
					<CardContent style={styles.content}>
						<Typography>{this.props.course.title}</Typography>
					</CardContent>
					<CardActionArea>
						<CardMedia
							component='img'
							className='media'
							image={this.props.course.image_240x135}
							title='course cover'
						/>
					</CardActionArea>
				</Card>
			</GridListTile>
		);
	}
}
{
	/* <CardActionArea>
<CardMedia
    component='img'
    className='media'
    image={imgUrl}
    title='album cover'
/>
<CardContent style={styles.content}>
    <Typography variant='body2' color='textSecondary' component='p'>
        {this.props.track.name}
    </Typography>
    <Typography variant='body2' color='textSecondary' component='p'>
        {this.props.track.artists[0].name}
    </Typography>
</CardContent>
</CardActionArea> */
}
