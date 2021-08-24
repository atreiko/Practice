import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
     appBar: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         margin: '30px 0',
         borderRadius: 15,
     },
     heading: {
        color: 'rgba(0, 183, 255, 1)'
     },
     image: {
         marginLeft: '15px'
     }
})) 