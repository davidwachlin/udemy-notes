import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const styles = {
	card: {
		maxWidth: '240px',
		maxHeight: '400px',
		padding: '0',
		boxSizing: 'border-box',
		fontSize: '15px',
		lineHeight: '1.43'
    },
    content: {
		boxSizing: 'border-box',
	},
	title: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'normal',
		fontWeight: '600',
		height: '42px',
		fontSize: '15px',
		color: '#29303b',
		marginBottom: '10px'
	},
	instructor: {
		display: 'block',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		fontSize: '12px',
		color: '#686f7a'
	}
};

export default class CourseCard extends Component {
	render() {
		return (
			<Grid item>
				<Card style={styles.card}>
					<CardMedia
						component='img'
						className='media'
						image={this.props.course.image_240x135}
						title='course cover'
					/>

					<CardContent style={styles.content}>
						<Typography style={styles.title}>
							{this.props.course.title}
						</Typography>
						<Typography style={styles.instructor}>{this.props.course.visible_instructors[0].title}</Typography>
					</CardContent>
					<CardActions>
						<Button size='small' color='primary'>

							<Link to={'/course'}>SELECT</Link>
						</Button>
					</CardActions>
				</Card>
			</Grid>
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
