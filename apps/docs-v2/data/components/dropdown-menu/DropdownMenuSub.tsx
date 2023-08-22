import {Button, DropdownMenu} from '@comfortdelgro/react-compass'

function SubExample() {
  return (
    <DropdownMenu>
      <DropdownMenu.Toggle>
        <Button variant='secondary'>DropdownMenu with Submenu</Button>
      </DropdownMenu.Toggle>
      <DropdownMenu.Menu>
        <DropdownMenu.Item isActived>Item 1</DropdownMenu.Item>
        <DropdownMenu.Item>
          Item 2
          <DropdownMenu.Submenu>
            <DropdownMenu.Item>
              Item 2 - 1
              <DropdownMenu.Submenu>
                <DropdownMenu.Item>Item 2 - 1 - 1</DropdownMenu.Item>
                <DropdownMenu.Item>Item 2 - 1 - 2</DropdownMenu.Item>
              </DropdownMenu.Submenu>
            </DropdownMenu.Item>
            <DropdownMenu.Item>Item 2 - 2</DropdownMenu.Item>
          </DropdownMenu.Submenu>
        </DropdownMenu.Item>
        <DropdownMenu.Item isDisabled>Item 3</DropdownMenu.Item>
        <DropdownMenu.Item>
          Item 4
          <DropdownMenu.Submenu>
            <DropdownMenu.Item>Item 4 - 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 4 - 2</DropdownMenu.Item>
          </DropdownMenu.Submenu>
        </DropdownMenu.Item>
      </DropdownMenu.Menu>
    </DropdownMenu>
  )
}

export default SubExample
