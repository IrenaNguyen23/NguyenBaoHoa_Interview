import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import * as Tabs from '@radix-ui/react-tabs';
import React, { useState } from 'react'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
           <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root className="TabsRoot" defaultValue="all" onValueChange={setFilter}>
          <Tabs.List className="flex items-center justify-between py-4" aria-label="Filter todos">
          <Tabs.Trigger
              className={`TabsTrigger border rounded-full py-3 px-10 ${filter === 'all' ? 'text-white border-blue-500 bg-gray-900' : 'border-transparent bg-gray-100'}`}
              value="all"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              className={`TabsTrigger border rounded-full py-3 px-10 ${filter === 'pending' ? 'text-white border-blue-500 bg-gray-900' : 'border-transparent bg-gray-100'}`}
              value="pending"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className={`TabsTrigger border rounded-full py-3 px-10 ${filter === 'completed' ? 'text-white border-blue-500 bg-gray-900' : 'border-transparent bg-gray-100'}`}
              value="completed"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="TabsContent" value="all">
            <TodoList filter="all" />
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="pending">
            <TodoList filter="pending" />
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="completed">
            <TodoList filter="completed" />
          </Tabs.Content>
        </Tabs.Root>


        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
