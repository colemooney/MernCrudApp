import React , { useEffect } from "react";
import { useState } from "react";
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ListPage = () => {

const [movieList, setMovieList] = useState([]);

    useEffect(()=> {
        Axios.get('http://localhost:3001/read')
        .then((response)=> {
          setMovieList(response.data);
        })
        .catch(() => {
            console.log("err")
        });
        
      }, []);

    return(
        <div>
            <h3>
                List of movies.
            </h3>
            {movieList.map((val) => {
                return (
                    <Stack spacing={2}>
                        <Item>
                            <h4>{val.movieName}</h4>
                            <p>{val.yearMade} </p>
                            <p>by: {val.directorName} </p>
                            <Rating name="read-only" value={val.rating} readOnly />
                        </Item>
                    </Stack>
                );
            })};
            <span>done</span>

        </div>
    );

};

export default ListPage;