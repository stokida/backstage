/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { createTemplateFilter } from '@backstage/plugin-scaffolder-node/alpha';
import { get as filter } from 'lodash';
import { examples } from './examples';

export const pick = createTemplateFilter({
  id: 'pick',
  description:
    'Selects a specific property (e.g. kind, namespace, name) from an object.',
  schema: z =>
    z.function(
      z.tuple([z.any(), z.string().describe('Property')]),
      z.any().describe('Selected property'),
    ),
  examples,
  filter,
});
