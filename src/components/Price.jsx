import { InputAdornment, Switch, SwitchUnstyled, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { styled } from '@mui/system';
import { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';


const useStyles = makeStyles({
  space: {
    marginTop: "20px!important",
    marginBottom: "20px!important",
    fontWeight: "700!important"
  },
  text: {
    color: "grey!important",
    fontWeight: "400!important"
  },
  price: {
    color: "#41b4ea",
    fontWeight: "700!important"
  },
  amount: {
    color: "black",
    fontWeight: "700!important"
  },
  purchase: {
    fontWeight: "700!important",
    color: "#379dd3"
  },
  spacebottom: {
    marginBottom: "20px!important"
  },
  unlockdiv: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    justifyContent: "space-between"
  },
  texta: {
    position: "relative",

    left: "-7%"
  }
})
const Root = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: grey;
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color:grey;
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 22px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: blue;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

function Price() {
  const [price, setPrice] = React.useState(2.5)
  const [amount, setAmount] = React.useState(106.58)
  const classes = useStyles()
  return (
    <div>
      <Typography variant="subtitle2" className={classes.space}>
        Price
      </Typography>
      <div className={classes.unlockdiv}>
        <TextField fullWidth id="standard-basic" placeholder="Amount" variant="standard" type="number"  
         InputProps={{
          endAdornment: <InputAdornment position="start">eth</InputAdornment>,
        }}
        />
        {/* <Typography variant="subtitle2" className={classes.texta}>
          ETH
        </Typography> */}
      </div>
      <Typography style={{ display: 'block' }} variant="caption" className={classes.text}>
        Service Fee <span className={classes.price}>{price}%</span>
      </Typography>
      <Typography variant="caption" className={classes.text}>
        You will receive <span className={classes.amount}>0.053 ETH</span> <span className={classes.price}>$106.58</span>
      </Typography>
      <div className={classes.unlockdiv}>
        <Typography variant="subtitle2"
          className={classes.purchase}
        >
          Unlock once Purchased

        </Typography>
        <SwitchUnstyled component={Root} defaultChecked />
      </div>
      <Typography variant="caption" className={classes.spacebottom} >
        Content will be unlocked after successful transaction
      </Typography>
      <TextField fullWidth id="standard-basic" label="Digital key,code to redeem or link to a file..." variant="standard" />
      <Typography style={{ display: 'block' }} variant="caption" className={classes.text}>
        Markdown is supported
      </Typography>
      <Typography variant="caption" className={classes.text}>
        Unicode Symbols are not supported
      </Typography>

    </div>
  )
}

export default Price
