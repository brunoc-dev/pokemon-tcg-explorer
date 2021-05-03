import apiAccess from '@/api/service/apiAccess'
import { expect } from 'chai'

describe('Api response test', function () {
  it('Should return an object from api', async function () {
    expect(await apiAccess.fetch()).to.be.a('object')
  })

  it('Should have a property data inside the response', async function () {
    expect(await apiAccess.fetch()).to.have.property('data')
  })
})
