import * as React from 'react'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Stack } from '@mui/material'
import useStyles from 'components/common/styles'

export default function QuantityButton() {
  const { classes, cx } = useStyles()
  const [count, updateCount] = React.useState(1)

  const increaseCount = () => {
    updateCount((prev) => ++prev)
  }

  const decreaseCount = () => {
    updateCount((prev) => (prev > 1 ? --prev : prev))
  }

  return (
    <Stack direction={'row'} sx={{ alignItems: 'center' }}>
      <Button
        variant="outlined"
        className={cx(classes.quantityBox, classes.quantityButton, 'remove')}
        disabled={!(count > 1)}
        onClick={decreaseCount}
      >
        <RemoveIcon />
      </Button>
      <Box className={cx(classes.quantityBox, classes.quantityText)}>{count}</Box>
      <Button
        variant="outlined"
        className={cx(classes.quantityBox, classes.quantityButton, 'add')}
        onClick={increaseCount}
      >
        <AddIcon />
      </Button>
    </Stack>
  )
}
