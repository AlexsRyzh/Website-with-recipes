import { Card, Skeleton, Box } from "@mui/material";



export default function RecipesCardSkeleton({
  key
}) {
  return (
    <Card sx={{
      borderRadius: '10px',
    }}
      key={key}
    >
      <Skeleton variant="rectangular" height={200} />

      <Box sx={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <Skeleton variant="text" sx={{ fontSize: '24px' }} width={200} />


        <Skeleton variant="text" sx={{ fontSize: '14px' }} width={250} />
        <Skeleton variant="text" sx={{ fontSize: '14px' }} width={250} />

        <Skeleton variant="rectangular" width={200} height={40} sx={{ borderRadius: '5px' }} />
      </Box>

    </Card>
  )
}
