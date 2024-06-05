import { Card, Text } from "@/components/UI"
import { Props } from "./types"

export const PeopleCard = ({ people }: Props) => {
  return (
    <Card>
      <Text>{people.name}</Text>
    </Card>
  )
}
