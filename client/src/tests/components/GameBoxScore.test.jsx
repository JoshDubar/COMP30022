import React from 'react'
import { render } from 'utils/test-utils'
import GameBoxScore from 'components/GameBoxScore'
import { stubGameData } from 'tests/stub'

describe('GameBoxScore', () => {
    test('renders correctly', () => {
        const { container } = render(<GameBoxScore game={stubGameData} />)

        expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="chakra-stack css-1twuvi0"
  >
    <div
      class="css-peekwf"
    >
      <div
        class="css-nkjao4"
      >
        <table
          class="chakra-table css-8h8zbs"
          role="table"
        >
          <thead
            class="css-0"
          >
            <tr
              class="css-148dcl3"
              role="row"
            >
              <th
                class="css-1yl8ql8"
              >
                PLAYER
              </th>
              <th
                class="css-1pxb4k9"
              >
                POINTS
              </th>
            </tr>
          </thead>
          <tbody
            class="css-tdnrhj"
          >
            <tr
              class="css-rh3m2f"
              role="row"
            >
              <td
                class="css-1eyncsv"
                role="gridcell"
              >
                Jane's First Player
              </td>
              <td
                class="css-1pn4oed"
                role="gridcell"
              >
                28
              </td>
            </tr>
            <tr
              class="css-rh3m2f"
              role="row"
            >
              <td
                class="css-1eyncsv"
                role="gridcell"
              >
                Jane's Second Player
              </td>
              <td
                class="css-1pn4oed"
                role="gridcell"
              >
                83
              </td>
            </tr>
            <tr
              class="css-csdx6d"
              role="row"
            >
              <td
                class="css-1eyncsv"
                role="gridcell"
              >
                TOTALS
              </td>
              <td
                class="css-1pn4oed"
                role="gridcell"
              >
                111
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="css-peekwf"
    >
      <div
        class="css-nkjao4"
      >
        <table
          class="chakra-table css-8h8zbs"
          role="table"
        >
          <thead
            class="css-0"
          >
            <tr
              class="css-148dcl3"
              role="row"
            >
              <th
                class="css-1yl8ql8"
              >
                PLAYER
              </th>
              <th
                class="css-1pxb4k9"
              >
                POINTS
              </th>
            </tr>
          </thead>
          <tbody
            class="css-tdnrhj"
          >
            <tr
              class="css-rh3m2f"
              role="row"
            >
              <td
                class="css-1eyncsv"
                role="gridcell"
              >
                Kangaroo Jumpy
              </td>
              <td
                class="css-1pn4oed"
                role="gridcell"
              >
                59
              </td>
            </tr>
            <tr
              class="css-rh3m2f"
              role="row"
            >
              <td
                class="css-1eyncsv"
                role="gridcell"
              >
                Kangaroo Kipper
              </td>
              <td
                class="css-1pn4oed"
                role="gridcell"
              >
                41
              </td>
            </tr>
            <tr
              class="css-csdx6d"
              role="row"
            >
              <td
                class="css-1eyncsv"
                role="gridcell"
              >
                TOTALS
              </td>
              <td
                class="css-1pn4oed"
                role="gridcell"
              >
                100
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
`)
    })
})
