import {assert} from 'chai'

import { getClient, randomString } from "./testHelpers"
import { Person } from '../microsoft-graph'

declare const describe, it;

describe('People', function() {
  this.timeout(10*1000);
  it('Fetch a list of people', function() {
    return getClient().api("https://graph.microsoft.com/beta/me/people/").get().then((json) => {
        const person = json.value[0] as Person;
        assert.isDefined(person.displayName);
        assert.isDefined(person.surname);
        assert.isDefined(person.id);

        assert.isUndefined(person['invalidPropertyName']);
        return Promise.resolve();
      });
  });
});