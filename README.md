## Piste UI 

A hackable UI framework built with React + Typescript. A work in progress. 

### Component Anatomy

All components are self contained (tests and stories are coeleseced with component implementation) for modular development. To create a new scaffold component run the following command: 

```
~$: npm run scaffold:component -- Button
```
This will automatically generate a new `Button` component in `src/lib/component` with the following structure: 

```
|--- Button/
|----- __mocks__/
|----- bin/
|---------- index.tsx
|----- stories/
|---------- Button.stories.tsx
|----- Button.tsx
|----- Button.test.tsx
|----- index.ts
```

* `__mocks__/`: Add mock data and assets neded for tests and stories 
* `bin/`: Add supplementatl components which are not re-usable or abstract
* `stories/`: The components storybook implementation
* `Button.tsx`: The main component implementation. 
* `Button.test.tsx`: The component tests
* `index.ts`: Manage the export of the Component and prop types. 

#### Best Practices

* Define only one component per file.
* Implement test cases to maintain ~95% test coverage
* Provide component styles from theme with prop overrides
* Export both the `Component` and the `ComponentProps` from the index files
* Add additional component files in the component root, if the compent is a series of exported components
* Don't export components in the `bin/` directory. If they are needed elsewhere, abstract them into a new component
* Don't group components by functionality. All components live in `src/lib/components`. 
* Add a types.ts file if a component introduces a new type associated with the component implementation  
* Add a utils.ts file if the compnent executes additional business logic. Declaring component dependencies in a util.ts file makes the code easier to test. 

