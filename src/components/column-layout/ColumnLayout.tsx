import React from "react"
import { useDispatch } from "react-redux"
import { DroppableId, Draggable, Droppable } from "react-beautiful-dnd"
import { RootState } from "../../redux/store"
import { useSelector } from "react-redux"
import { ColumnLayoutProps } from "../../types"
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Container,
  ListGroup,
} from "react-bootstrap"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import { MdControlPoint } from "react-icons/md"

const ColumnLayout: React.FC<ColumnLayoutProps> = ({
  labelText,
  addHandler,
  removeHandler,
  updateTextShowed,
  completeHandler,
  selectorState,
  droppableId,
}) => {
  const [isError, setIsError] = React.useState({
    isShow: false,
    text: "",
  })

  const [textDescription, setTextDescription] = React.useState("")
  const dispatch = useDispatch()

  const handleOnChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTextDescription(value)

    setIsError({
      isShow: value.length > 200,
      text: value.length > 200 ? "Max 200 characters" : "",
    })
  }

  const handleOnBlur = () => {
    setIsError({ ...isError, isShow: false })
  }

  const handleOnClick = () => {
    if (!isError.isShow) {
      dispatch(addHandler(textDescription))
      setTextDescription("")
    }
  }

  const handleInputKeyDown = ({
    target,
    key,
  }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") {
      if (
        (target as HTMLInputElement).value.length > 0 &&
        (target as HTMLInputElement).value.length <= 200
      ) {
        handleOnClick()
      } else {
        setIsError({
          isShow: true,
          text: "The text must be between 1 and 200 characters",
        })
      }
    }
  }

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>{labelText}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={handleOnChange}
            onKeyDown={handleInputKeyDown}
            onBlur={handleOnBlur}
            value={textDescription}
            className="shadow p-2 my-2"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            handleOnClick()
          }}
          onKeyDown={({ key }) => key === "Enter" && handleOnClick()}
          disabled={
            textDescription.length === 0 || textDescription.length > 200
          }
          className="shadow my-2"
        >
          <MdControlPoint size={30} />
        </Button>
      </Form>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <ListGroup
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="shadow p-3 bg-success bg-gradient mt-3"
          >
            {selectorState.map(
              (
                { id, text, isCompleted, createdAt, updatedAt, isTextShowed },
                index: number
              ) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <ListGroup.Item
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span>
                        {updatedAt
                          ? `Updated at: ${updatedAt.toLocaleString()}`
                          : `Created at: ${createdAt?.toLocaleString()}`}
                      </span>
                      <p>{text}</p>
                      <div>
                        <Button
                          variant="danger"
                          onClick={() => dispatch(removeHandler(id))}
                        >
                          <BsTrash />
                        </Button>
                      </div>
                    </ListGroup.Item>
                  )}
                </Draggable>
              )
            )}
            {provided.placeholder}
          </ListGroup>
        )}
      </Droppable>
    </Container>
  )
}

export default ColumnLayout
