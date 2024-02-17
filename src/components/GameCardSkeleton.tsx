import {Card,Skeleton,SkeletonText,CardBody} from "@chakra-ui/react"

export const GameCardSkeleton = () => {
  return (
    <Card width={"300px"} overflow="hidden">

       
        <Skeleton height={"300px"} />
        <CardBody>
        </CardBody>
        <SkeletonText></SkeletonText>
    </Card>
  )
}
